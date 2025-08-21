def warp(a):
    print('warp()执行')
    #装饰器
    a(1,2)

@warp #
def outer(a,b):
    
    def func(a):
        print('func()执行')
        print(a)# 这是func()本身的功能
        return a+1
    print('outer()执行')
    print(b)
    func(a)
    #增加了print(b)的功能，因为开放封闭原则，不能改动func()
    #只能套一个outer