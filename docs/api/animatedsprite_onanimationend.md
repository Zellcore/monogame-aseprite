---
id: animatedsprite_onanimationend
sidebar_label: AnimatedSprite.OnAnimationEnd
hide_title: true
slug: animatedsprite_onanimationend
---
#### [MonoGame.Aseprite](index 'index')
### [MonoGame.Aseprite.Graphics](monogame_aseprite_graphics 'MonoGame.Aseprite.Graphics').[AnimatedSprite](animatedsprite 'MonoGame.Aseprite.Graphics.AnimatedSprite')
## AnimatedSprite.OnAnimationEnd Property
Gets or Sets an action to invoke when an animation ends.  
```csharp
public System.Action OnAnimationEnd { get; set; }
```
#### Property Value
[System.Action](https://docs.microsoft.com/en-us/dotnet/api/System.Action 'System.Action')  
### Remarks
This action will only be called at the end of one-shot  
animations, or if [Stop()](animatedsprite_stop__ 'MonoGame.Aseprite.Graphics.AnimatedSprite.Stop()') is called manually.  
