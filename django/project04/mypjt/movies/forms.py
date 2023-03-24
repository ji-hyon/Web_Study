from django import forms
from .models import Movie

class MovieForm(forms.ModelForm):
    
    # genre = forms.ChoiceField(choices=['코미디', '공포', '로맨스'])
    GENRE_A = 'comedy'
    GENRE_B = 'thriller'
    GENRE_C = 'romance'
    GENRE_CHOICES = [
        (GENRE_A, '코미디'),
        (GENRE_B, '공포'),
        (GENRE_C, '로맨스'),
    ]

    genre = forms.ChoiceField(choices=GENRE_CHOICES)

    score = forms.FloatField(
        widget=forms.NumberInput(attrs={
            'type': 'number',
            'step':0.5,
            'min':0,
            'max':5,
        })
    )

    release_date = forms.DateField(widget=forms.DateInput(attrs={'type': 'date'}))
    
    class Meta:
        model = Movie
        fields = '__all__'

        # fields = ['genre']

