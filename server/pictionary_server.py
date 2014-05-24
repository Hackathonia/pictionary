import random
import linecache

class Word_Generator():

    filename = "word_list.txt"

    def file_len(filename):
        with open(filename)as f:
            for i, l in enumerate(f):
                pass
        return i + 1

    def random_file_line(filename):
        line = linecache.getline(filename, random.randint(0, file_len(filename)))
        return line

