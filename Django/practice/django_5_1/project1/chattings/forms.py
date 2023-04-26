from django import forms
from .models import Chatting

class ChattingForm(forms.ModelForm):
    user = forms.CharField(
        label='작성자',
        widget=forms.TextInput(
            attrs={
                'placeholder' : 'Nickname',
                'maxlength' : 10,
            }
        ),
    )
    
    content = forms.CharField(
        label='내용',
         widget=forms.Textarea(
            attrs={
                'placeholder' : 'Chat!',
                'rows':5,
                'cols':50,
            }
        ),
    )
    
    
    class Meta:
        model = Chatting
        fields = '__all__'
        


