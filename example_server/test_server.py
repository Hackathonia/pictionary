import tornado.ioloop
import tornado.websocket
from json import dumps, loads

clients = []

class WebSocketPictionaryHandler(tornado.websocket.WebSocketHandler):
    def open(self, *args):
        print("open", "WebSocketChatHandler")
        clients.append(self)
        stuff = {
            'command': 'become_artist'
        }
        self.write_message(dumps(stuff))


    def on_message(self, message):
        data = loads(message)
        print(data)
        for client in clients:
            client.write_message(dumps(data['command']))

    def on_close(self):
        clients.remove(self)

app = tornado.web.Application([(r'/', WebSocketPictionaryHandler)])

app.listen(8000)
tornado.ioloop.IOLoop.instance().start()