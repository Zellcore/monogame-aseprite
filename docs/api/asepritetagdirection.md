---
id: asepritetagdirection
sidebar_label: Overview
hide_title: true
slug: asepritetagdirection
---
#### [MonoGame.Aseprite](index 'index')
### [MonoGame.Aseprite.Documents](monogame_aseprite_documents 'MonoGame.Aseprite.Documents')
## AsepriteTagDirection Enum
Values that define the direction in which a the animation  
defined by an [AsepriteTag](asepritetag 'MonoGame.Aseprite.Documents.AsepriteTag') should be played.  
```csharp
public enum AsepriteTagDirection
```
### Fields
---
id: asepritetagdirection_forward
sidebar_label: AsepriteTagDirection.Forward
hide_title: true
slug: asepritetagdirection_forward
---
`Forward` 0  
The animation shoudl be played in a forward direction from  
the starting frame to the ending frame.  
  
---
id: asepritetagdirection_reverse
sidebar_label: AsepriteTagDirection.Reverse
hide_title: true
slug: asepritetagdirection_reverse
---
`Reverse` 1  
The aniamtion should be played in a reverse direction from  
the ending frame to the starting frame.  
  
---
id: asepritetagdirection_pingping
sidebar_label: AsepriteTagDirection.PingPing
hide_title: true
slug: asepritetagdirection_pingping
---
`PingPing` 2  
The animation should ping pong the direciton played; First it should  
play forward from the starting frame to the ending frame, then it should  
play in reverse from the ending frame to the starting frame.  
  
---
id: asepritetagdirection_oneshot
sidebar_label: AsepriteTagDirection.OneShot
hide_title: true
slug: asepritetagdirection_oneshot
---
`OneShot` 3  
The animation should only play from the starting frame to the ending frame  
and the stop animation on the ending frame.  
  
