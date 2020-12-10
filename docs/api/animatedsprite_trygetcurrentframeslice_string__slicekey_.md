---
id: animatedsprite_trygetcurrentframeslice_string__slicekey_
sidebar_label: TryGetCurrentFrameSlice(string, SliceKey)
hide_title: true
slug: animatedsprite_trygetcurrentframeslice_string__slicekey_
---
#### [MonoGame.Aseprite](index 'index')
### [MonoGame.Aseprite.Graphics](monogame_aseprite_graphics 'MonoGame.Aseprite.Graphics').[AnimatedSprite](animatedsprite 'MonoGame.Aseprite.Graphics.AnimatedSprite')
## AnimatedSprite.TryGetCurrentFrameSlice(string, MonoGame.Aseprite.Graphics.SliceKey) Method
Get the Rectangle definition of the slice at the current frame of   
animation, if there is a slice key defined for the frame  
```csharp
public bool TryGetCurrentFrameSlice(string sliceName, out MonoGame.Aseprite.Graphics.SliceKey sliceKey);
```
#### Parameters
`sliceName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The name of the slice  
  
`sliceKey` [SliceKey](slicekey 'MonoGame.Aseprite.Graphics.SliceKey')  
  
#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
A Rectangle definition of the frame slice, at the xy-coordinate of  
this sprite.  If no slice key exists for the current frame,   
null is returned.  
#### Exceptions
[System.ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentException 'System.ArgumentException')  
Thrown if the slice name provided does not exist in the animation definitions slice dictionary  
