from django.shortcuts import render, redirect
from .models import Chatting
from .forms import ChattingForm

# Create your views here.
def create(request):
    if request.method == "POST":
        form = ChattingForm(request.POST)
        if form.is_valid():
            chatting = form.save()
            return redirect('chattings:detail', chatting.pk)
    else:
        form = ChattingForm()

    context = {'form':form}
    return render(request, 'chattings/create.html', context)
    
def index(request):
    chattings = Chatting.objects.all()
    context = {'chattings':chattings}
    return render(request, 'chattings/index.html', context)

def detail(request,pk):
    chatting = Chatting.objects.get(pk=pk)
    context = {'chatting':chatting}
    return render(request, 'chattings/detail.html', context)