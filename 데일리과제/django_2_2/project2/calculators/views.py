from django.shortcuts import render

# Create your views here.
def func(request, num1, num2):
    if num2 != 0:
        div = num1 / num2
    else:
        div = '계산할 수 없습니다.'

    context = {
        'num1' : num1,
        'num2' : num2,
        'sub' : num1 - num2,
        'mul' : num1 * num2,
        'div' : div
    }
    return render(request, 'calculators/calculator.html', context)
