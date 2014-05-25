import random
import linecache
import tornado.ioloop
import tornado.web
import tornado.websocket

class Word_Generator:

    filename = "word_list.txt"

    def file_len(filename):
        with open(filename)as f:
            for i, l in enumerate(f):
                pass
        return i + 1

    def random_file_line(filename):
        line = linecache.getline(filename, random.randint(0, file_len(filename)))
        return line

    word = random_file_line(filename)

class Player:

    def __init__(self, nickname, win_count):
        self.nickname = nickname
        self.win_count = win_count

class WebSocketChatHandler(tornado.websocket.WebSocketHandler):
    def open(self, *args):
        print("open", "WebSocketChatHandler")
        clients.append(self)

    def on_message(self, message):
        print(message)
        for client in clients:
            client.write_message(message)

    def on_close(self):
        clients.remove(self)






# from example code for handling chat via websocket

# clients = []

# class IndexHandler(tornado.web.RequestHandler):
#     @tornado.web.asynchronous
#     def get(request):
#         request.render("index.html")

# class WebSocketChatHandler(tornado.websocket.WebSocketHandler):
#     def open(self, *args):
#         print("open", "WebSocketChatHandler")
#         clients.append(self)

#     def on_message(self, message):
#         print(message)
#         for client in clients:
#             client.write_message(message)

#     def on_close(self):
#         clients.remove(self)

# app = tornado.web.Application([(r'/chat', WebSocketChatHandler), (r'/', IndexHandler)])

# app.listen(8000)
# tornado.ioloop.IOLoop.instance().start()
