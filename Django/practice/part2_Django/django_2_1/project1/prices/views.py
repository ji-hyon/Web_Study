from django.shortcuts import render

product_price = {"라면":980,"홈런볼":1500,"칙촉":2300, "식빵":1800}

# Create your views here.
def price(request, thing, cnt):
    if thing in product_price:
        y_n = 'y'
        price = product_price[thing]
    else:
        y_n = 'n'
        price = 0
    context = {
        'y_n' : y_n,
        'price' : price,
        'thing' : thing,
        'cnt' : cnt,
        'total' : price * cnt
    }
    return render(request, 'prices/price.html', context)