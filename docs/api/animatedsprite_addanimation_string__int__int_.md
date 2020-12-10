---
id: animatedsprite_addanimation_string__int__int_
sidebar_label: AddAnimation(string, int, int)
hide_title: true
slug: animatedsprite_addanimation_string__int__int_
---
#### [MonoGame.Aseprite](index 'index')
### [MonoGame.Aseprite.Graphics](monogame_aseprite_graphics 'MonoGame.Aseprite.Graphics').[AnimatedSprite](animatedsprite 'MonoGame.Aseprite.Graphics.AnimatedSprite')
## AnimatedSprite.AddAnimation(string, int, int) Method
Given the name, starting frame, and ending frame, creates a new  
[Animation](animation 'MonoGame.Aseprite.Graphics.Animation') instances and adds it to the animation dictionary.  
```csharp
public void AddAnimation(string name, int from, int to);
```
#### Parameters
`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The name of the animation  
  
`from` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')  
The starting frame  
  
`to` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')  
The ending frame  
  
#### Exceptions
[System.ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentException 'System.ArgumentException')  
Thrown if the animation provided has a name that is already present in   
the animation dictionary  
### Remarks
Animations are stored in the ditionary by name, so each animation  
must have a unique name  
