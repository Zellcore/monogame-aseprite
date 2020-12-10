---
id: animatedsprite_play_string_
sidebar_label: Play(string)
hide_title: true
slug: animatedsprite_play_string_
---
#### [MonoGame.Aseprite](index 'index')
### [MonoGame.Aseprite.Graphics](monogame_aseprite_graphics 'MonoGame.Aseprite.Graphics').[AnimatedSprite](animatedsprite 'MonoGame.Aseprite.Graphics.AnimatedSprite')
## AnimatedSprite.Play(string) Method
Given the name of an animation, sets that animation as the  
current animation to play and starts it.  
```csharp
public void Play(string animationName);
```
#### Parameters
`animationName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The name of the animation to play.  
  
#### Exceptions
[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
Thrown if there is no animation exists with the name given  
in [animationName](#monogame_aseprite_graphics_animatedsprite_play_string__animationname 'MonoGame.Aseprite.Graphics.AnimatedSprite.Play(string).animationName')  
