---
id: animatedsprite_addanimation_animation_
sidebar_label: AddAnimation(Animation)
title: AddAnimation(Animation)
hide_title: true
slug: animatedsprite_addanimation_animation_
---
#### [MonoGame.Aseprite](index 'index')
### [MonoGame.Aseprite.Graphics](monogame_aseprite_graphics 'MonoGame.Aseprite.Graphics').[AnimatedSprite](animatedsprite 'MonoGame.Aseprite.Graphics.AnimatedSprite')
## AnimatedSprite.AddAnimation(MonoGame.Aseprite.Graphics.Animation) Method
Adds the given [Animation](animation 'MonoGame.Aseprite.Graphics.Animation') to the animations dictionary  
```csharp
public void AddAnimation(MonoGame.Aseprite.Graphics.Animation animation);
```
#### Parameters
`animation` [Animation](animation 'MonoGame.Aseprite.Graphics.Animation')  
The [Animation](animation 'MonoGame.Aseprite.Graphics.Animation') to add  
  
#### Exceptions
[System.ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentException 'System.ArgumentException')  
Thrown if the animation provided has a name that is already present in   
the animation dictionary  
### Remarks
Animations are stored in the dictionary by name, so each animation  
must have a unique name  
