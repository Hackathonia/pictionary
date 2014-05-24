 var ws;
      
      function createChatEntry(username, message) {
        var entry = document.createElement("div");
        entry.class = "chat_entry";
        
        var dom_uname = document.createElement("span");
        dom_uname.class = "chat_username";
        dom_uname.innerHTML = username+": ";
        entry.appendChild(dom_uname);
        
        var dom_msg = document.createElement("span");
        dom_msg.class = "chat_message";
        dom_msg.innerHTML = message;
        entry.appendChild(dom_msg);
        
        return entry;
      }
      
      function openWS(messageContainer) {
        ws = new WebSocket("ws://127.0.0.1:8000/chat");
        ws.onmessage = function(e) {
          var data = JSON.parse(e.data);
          messageContainer.appendChild(createChatEntry(data.author, data.message));
        };
        ws.onclose = function(e) {
          openWS(messageContainer);
        };
      }

      function sendMessage() {
        var data = { author: document.getElementById("username").value,
                     message: document.getElementById("message").value };
        
        if(data.author && data.message) {
          ws.send(JSON.stringify(data));
        }
      }
      
      window.onload = function() {
        var messageContainer = document.getElementById("chat");
        if("WebSocket" in window) {
          openWS(messageContainer);
        }
        else {
          messageContainer.appendChild(createChatEntry("[SYSTEM]", "WebSocket is NOT supported by your browser!"));
        }
      }