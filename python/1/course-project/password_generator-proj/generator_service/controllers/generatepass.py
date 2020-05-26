import random

def getPass(length, capital, special):
    passLength = length
    passCapital = capital
    passSpecial = special
    genPassword = ''

    lCharacters = list('abcdefghijklmnopqrstuvwxyz')

    if (passCapital):
        lCharacters.extend('ABCDEFGHIJKLMNOPQRSTUVWXYZ')

    if (passSpecial):
        lCharacters.extend('*!#?$')

    for i in range(passLength):
        genPassword += random.choice(lCharacters)

    return genPassword  # 'hi from controller'
