from django.shortcuts import render
import random

age = range(25, 31)
age_pick = random.choice(age)
grade = ['a', 'b', 'c', 's']
context = {
    'name' : 'Jihyon',
    'age': age_pick,
    'grade': grade
}

# Create your views here.
def certification1(request):
    return render(request, 'certifications/certification1.html', context)

def certification2(request):
    return render(request, 'certifications/certification2.html', context)

def certification3(request):
    return render(request, 'certifications/certification3.html', context)
