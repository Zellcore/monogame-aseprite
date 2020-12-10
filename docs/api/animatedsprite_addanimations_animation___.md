---
id: animatedsprite_addanimations_animation___
sidebar_label: AddAnimations(Animation[])
hide_title: true
slug: animatedsprite_addanimations_animation___
---
#### [MonoGame.Aseprite](index 'index')
### [MonoGame.Aseprite.Graphics](monogame_aseprite_graphics 'MonoGame.Aseprite.Graphics').[AnimatedSprite](animatedsprite 'MonoGame.Aseprite.Graphics.AnimatedSprite')
## AnimatedSprite.AddAnimations(MonoGame.Aseprite.Graphics.Animation[]) Method
Given [Animations](animatedsprite_animations 'MonoGame.Aseprite.Graphics.AnimatedSprite.Animations') instances, adds them to the animation  
dictionary.  
```csharp
public void AddAnimations(params MonoGame.Aseprite.Graphics.Animation[] animations);
```
#### Parameters
`animations` [Animation](animation 'MonoGame.Aseprite.Graphics.Animation')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
The [Animation](animation 'MonoGame.Aseprite.Graphics.Animation') instances to add  
  
#### Exceptions
[System.ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentException 'System.ArgumentException')  
Thrown if the animation provided has a name that is already present in   
the animation dictionary  
### Remarks
Animations are stored in the dictionary by name, so each animation  
must have a unique name  
