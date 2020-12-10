---
id: animatedsprite_addanimations_ienumerable_animation__
sidebar_label: AddAnimations(IEnumerable<Animation>)
hide_title: true
slug: animatedsprite_addanimations_ienumerable_animation__
---
#### [MonoGame.Aseprite](index 'index')
### [MonoGame.Aseprite.Graphics](monogame_aseprite_graphics 'MonoGame.Aseprite.Graphics').[AnimatedSprite](animatedsprite 'MonoGame.Aseprite.Graphics.AnimatedSprite')
## AnimatedSprite.AddAnimations(System.Collections.Generic.IEnumerable&lt;MonoGame.Aseprite.Graphics.Animation&gt;) Method
Given a collection of [Animation](animation 'MonoGame.Aseprite.Graphics.Animation') instances, adds them  
to the animation dictionary.  
```csharp
public void AddAnimations(System.Collections.Generic.IEnumerable<MonoGame.Aseprite.Graphics.Animation> animations);
```
#### Parameters
`animations` [System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[Animation](animation 'MonoGame.Aseprite.Graphics.Animation')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')  
The collection of [Animation](animation 'MonoGame.Aseprite.Graphics.Animation') instances to add  
  
#### Exceptions
[System.ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentException 'System.ArgumentException')  
Thrown if the animation provided has a name that is already present in   
the animation dictionary  
### Remarks
Animations are stored in the dictionary by name, so each animation  
must have a unique name  
