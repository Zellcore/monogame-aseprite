---
id: animatedsprite
sidebar_label: Overview
hide_title: true
slug: animatedsprite
---
#### [MonoGame.Aseprite](index 'index')
### [MonoGame.Aseprite.Graphics](monogame_aseprite_graphics 'MonoGame.Aseprite.Graphics')
## AnimatedSprite Class
An animated sprite class used to define, mange, and rendering sprite  
animations based on a single spritesheet.  
```csharp
public class AnimatedSprite : MonoGame.Aseprite.Graphics.Sprite
```
Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [Sprite](sprite 'MonoGame.Aseprite.Graphics.Sprite') &#129106; AnimatedSprite  
### Constructors
- [AnimatedSprite(Texture2D)](animatedsprite_animatedsprite_texture2d_ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AnimatedSprite(Texture2D)')
- [AnimatedSprite(Texture2D, Vector2)](animatedsprite_animatedsprite_texture2d__vector2_ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AnimatedSprite(Texture2D, Vector2)')
- [AnimatedSprite(MonoGame.Aseprite.Documents.AsepriteDocument)](animatedsprite_animatedsprite_asepritedocument_ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AnimatedSprite(MonoGame.Aseprite.Documents.AsepriteDocument)')
- [AnimatedSprite(MonoGame.Aseprite.Documents.AsepriteDocument, Vector2)](animatedsprite_animatedsprite_asepritedocument__vector2_ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AnimatedSprite(MonoGame.Aseprite.Documents.AsepriteDocument, Vector2)')
### Properties
- [Animating](animatedsprite_animating 'MonoGame.Aseprite.Graphics.AnimatedSprite.Animating')
- [Animations](animatedsprite_animations 'MonoGame.Aseprite.Graphics.AnimatedSprite.Animations')
- [CurrentAnimation](animatedsprite_currentanimation 'MonoGame.Aseprite.Graphics.AnimatedSprite.CurrentAnimation')
- [CurrentFrame](animatedsprite_currentframe 'MonoGame.Aseprite.Graphics.AnimatedSprite.CurrentFrame')
- [CurrentFrameIndex](animatedsprite_currentframeindex 'MonoGame.Aseprite.Graphics.AnimatedSprite.CurrentFrameIndex')
- [Frames](animatedsprite_frames 'MonoGame.Aseprite.Graphics.AnimatedSprite.Frames')
- [FrameTimer](animatedsprite_frametimer 'MonoGame.Aseprite.Graphics.AnimatedSprite.FrameTimer')
- [Height](animatedsprite_height 'MonoGame.Aseprite.Graphics.AnimatedSprite.Height')
- [OnAnimationEnd](animatedsprite_onanimationend 'MonoGame.Aseprite.Graphics.AnimatedSprite.OnAnimationEnd')
- [OnAnimationLoop](animatedsprite_onanimationloop 'MonoGame.Aseprite.Graphics.AnimatedSprite.OnAnimationLoop')
- [OnFrameBegin](animatedsprite_onframebegin 'MonoGame.Aseprite.Graphics.AnimatedSprite.OnFrameBegin')
- [OnFrameEnd](animatedsprite_onframeend 'MonoGame.Aseprite.Graphics.AnimatedSprite.OnFrameEnd')
- [Paused](animatedsprite_paused 'MonoGame.Aseprite.Graphics.AnimatedSprite.Paused')
- [Slices](animatedsprite_slices 'MonoGame.Aseprite.Graphics.AnimatedSprite.Slices')
- [Width](animatedsprite_width 'MonoGame.Aseprite.Graphics.AnimatedSprite.Width')
### Methods
- [AddAnimation(MonoGame.Aseprite.Graphics.Animation)](animatedsprite_addanimation_animation_ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AddAnimation(MonoGame.Aseprite.Graphics.Animation)')
- [AddAnimation(string, int, int)](animatedsprite_addanimation_string__int__int_ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AddAnimation(string, int, int)')
- [AddAnimations(MonoGame.Aseprite.Graphics.Animation[])](animatedsprite_addanimations_animation___ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AddAnimations(MonoGame.Aseprite.Graphics.Animation[])')
- [AddAnimations(System.Collections.Generic.IEnumerable&lt;MonoGame.Aseprite.Graphics.Animation&gt;)](animatedsprite_addanimations_ienumerable_animation__ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AddAnimations(System.Collections.Generic.IEnumerable&lt;MonoGame.Aseprite.Graphics.Animation&gt;)')
- [AddFrame(MonoGame.Aseprite.Graphics.Frame)](animatedsprite_addframe_frame_ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AddFrame(MonoGame.Aseprite.Graphics.Frame)')
- [AddFrame(int, int, int, int, float)](animatedsprite_addframe_int__int__int__int__float_ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AddFrame(int, int, int, int, float)')
- [AddFrames(MonoGame.Aseprite.Graphics.Frame[])](animatedsprite_addframes_frame___ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AddFrames(MonoGame.Aseprite.Graphics.Frame[])')
- [AddFrames(System.Collections.Generic.IEnumerable&lt;MonoGame.Aseprite.Graphics.Frame&gt;)](animatedsprite_addframes_ienumerable_frame__ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AddFrames(System.Collections.Generic.IEnumerable&lt;MonoGame.Aseprite.Graphics.Frame&gt;)')
- [AddSlice(MonoGame.Aseprite.Graphics.Slice)](animatedsprite_addslice_slice_ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AddSlice(MonoGame.Aseprite.Graphics.Slice)')
- [AddSlice(string, Color, MonoGame.Aseprite.Graphics.SliceKey[])](animatedsprite_addslice_string__color__slicekey___ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AddSlice(string, Color, MonoGame.Aseprite.Graphics.SliceKey[])')
- [AddSlice(string, Color, System.Collections.Generic.Dictionary&lt;int,MonoGame.Aseprite.Graphics.SliceKey&gt;)](animatedsprite_addslice_string__color__dictionary_int_slicekey__ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AddSlice(string, Color, System.Collections.Generic.Dictionary&lt;int,MonoGame.Aseprite.Graphics.SliceKey&gt;)')
- [AddSlice(string, Color, System.Collections.Generic.IEnumerable&lt;MonoGame.Aseprite.Graphics.SliceKey&gt;)](animatedsprite_addslice_string__color__ienumerable_slicekey__ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AddSlice(string, Color, System.Collections.Generic.IEnumerable&lt;MonoGame.Aseprite.Graphics.SliceKey&gt;)')
- [AddSlice(string, MonoGame.Aseprite.Graphics.SliceKey[])](animatedsprite_addslice_string__slicekey___ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AddSlice(string, MonoGame.Aseprite.Graphics.SliceKey[])')
- [AddSlice(string, System.Collections.Generic.Dictionary&lt;int,MonoGame.Aseprite.Graphics.SliceKey&gt;)](animatedsprite_addslice_string__dictionary_int_slicekey__ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AddSlice(string, System.Collections.Generic.Dictionary&lt;int,MonoGame.Aseprite.Graphics.SliceKey&gt;)')
- [AddSlice(string, System.Collections.Generic.IEnumerable&lt;MonoGame.Aseprite.Graphics.SliceKey&gt;)](animatedsprite_addslice_string__ienumerable_slicekey__ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AddSlice(string, System.Collections.Generic.IEnumerable&lt;MonoGame.Aseprite.Graphics.SliceKey&gt;)')
- [AddSlices(MonoGame.Aseprite.Graphics.Slice[])](animatedsprite_addslices_slice___ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AddSlices(MonoGame.Aseprite.Graphics.Slice[])')
- [AdvanceFrame()](animatedsprite_advanceframe__ 'MonoGame.Aseprite.Graphics.AnimatedSprite.AdvanceFrame()')
- [ForwardAnimationLoopCheck()](animatedsprite_forwardanimationloopcheck__ 'MonoGame.Aseprite.Graphics.AnimatedSprite.ForwardAnimationLoopCheck()')
- [GetSliceColor(string)](animatedsprite_getslicecolor_string_ 'MonoGame.Aseprite.Graphics.AnimatedSprite.GetSliceColor(string)')
- [Pause(bool)](animatedsprite_pause_bool_ 'MonoGame.Aseprite.Graphics.AnimatedSprite.Pause(bool)')
- [PingPongAnimationLoopCheck()](animatedsprite_pingponganimationloopcheck__ 'MonoGame.Aseprite.Graphics.AnimatedSprite.PingPongAnimationLoopCheck()')
- [Play(string)](animatedsprite_play_string_ 'MonoGame.Aseprite.Graphics.AnimatedSprite.Play(string)')
- [Render(SpriteBatch)](animatedsprite_render_spritebatch_ 'MonoGame.Aseprite.Graphics.AnimatedSprite.Render(SpriteBatch)')
- [ReverseAnimationLoopCheck()](animatedsprite_reverseanimationloopcheck__ 'MonoGame.Aseprite.Graphics.AnimatedSprite.ReverseAnimationLoopCheck()')
- [Stop()](animatedsprite_stop__ 'MonoGame.Aseprite.Graphics.AnimatedSprite.Stop()')
- [TryGetCurrentFrameSlice(string, MonoGame.Aseprite.Graphics.SliceKey)](animatedsprite_trygetcurrentframeslice_string__slicekey_ 'MonoGame.Aseprite.Graphics.AnimatedSprite.TryGetCurrentFrameSlice(string, MonoGame.Aseprite.Graphics.SliceKey)')
- [Unpause(bool)](animatedsprite_unpause_bool_ 'MonoGame.Aseprite.Graphics.AnimatedSprite.Unpause(bool)')
- [Update(float)](animatedsprite_update_float_ 'MonoGame.Aseprite.Graphics.AnimatedSprite.Update(float)')
