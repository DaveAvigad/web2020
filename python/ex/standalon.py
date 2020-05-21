# 1
print('hello world')

# 1.2
fname = 'davidAvigad'
id = 200550010
print(fname + str(id))

# 2
def printIt(word):
    print(word * 3)

printIt('hello')


# 3
def printBrands(brands):
    for b in brands:
        print(b)

test = ['a', 'b', 'c']
printBrands(test)

# 4
import random
N = 20
M = 300

listOfNumbers = [N]
for i in range(N):
    listOfNumbers.append(random.randrange(M))
print(listOfNumbers)

# 4.2
listOfNumbers.reverse()
print(listOfNumbers)

# 5
websites = [
    'Youtube.com',
    'en.wikipedia.org',
    'twitter.com535',
    'facebook.com',
    'amazon.com',
    'yelp.com'
 ]

def addPrefix(sites):
    for site in sites:
        i = sites.index(site)
        sites[i] = 'http://' + site
    return sites

print(addPrefix(websites))

# 6

def myBday(*numbers):
    sum = 0
    for num in numbers:
        if num % 2 == 0:
            sum += num
    return sum

print(myBday(20, 5, 88, 90, 100, 70))

# 7

words = ['consider', 'minute', 'accord', 'evident']
definitions = ['deem to be', 'infinitely or immeasurably small', 'concurrence of opinion', 'clearly revealed to the mind or the senses or judgment']
a = {}

for i in range(len(words)):
    word = words[i]
    definition = definitions[i]
    a[word] = definition

print(a)

# 8
a = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
b = [num for num in a if num % 2 == 0] # (num % 2 == 0) is True
print(b)

# 9
a = 'My name is Michele'
b = a[15:0:1]
print(b) #  elehciM si eman yM

# 10
a = 'My name is Michele'
b = [word for word in a.split()[::-1]]
print(b) # ['Michele', 'is', 'name', 'My']

# 11
a = 'My name is Michele'
b = ' '.join(a.split()[::-1])
print(b) # ‘Michele is name My’
