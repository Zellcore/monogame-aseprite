---
id: animated-sprite-class
title: Using the Animated Sprite Class
sidebar_label: Using the Animated Sprite Class
---

This serves to document the `AnimatedSprite` class that you can use out-of-the-box in your game.

## Overview
The `AnimatedSprite` class is an out-of-the-box solution for using the `AsepriteDocument` imported from the content pipeline.  The purpose of it is to give users a quick way of making use of the document imported, as well as an example of what you can do with it.

:::note Out-of-the-box Solutions

As stated, the `AniamtedSprite is an out-of-the-box solution.  It is not going to fit every need that a user may have when it comes to animating their sprites.  With that in mind, it is designed to provide most of what you would need as a foundation.  Feel free to submit feedback on the GitHub repository for any suggestions on the class design and function.

:::

Below we'll go over how to instantiate a new instance of the class using the `AsepriteDocument`, and go over how to play an animation, and the various properties that are accessable to the class.

## Creating a New Instance
To create a new instance of the `AnimatedSprite` class, you an call the `AnimatedSprite(AsepriteDocument)` constructor.  First you'll need to import the `AsepriteDocument`, then you can create the class.  Here is an exmaple

```csharp
using Monogame.Aseprite.Documents;
using MonoGame.Aseprite.Graphics;


AsepriteDocument aseprite = Content.Load<AsepriteDocument>("player_animations");
AnimatedSprite sprite = new AnimatedSprite(aseprite);
```

## Updating the Instnace
You will need to call the `Udpate` method each game update cycle in order for the animations to actual update and play correctly.  To update methods are provided.  The first `Update(GameTime)` takes a `GameTime` instance.  The other overload method is `Update(float)` and takes a delta time value which is the total seconds since the last update.  This is provided for users who pre calculate the delta time and would rather use that one. Here are examples of both being used

```csharp
sprite.Update(gameTime);
```

```csharp
float deltaTime = (float)gameTime.ElapsedGameTime.TotalSeconds;
sprite.update(deltaTime);
```

## Rendering the Instance
When you're ready to render the animated sprite, you just need to call the `Render(SpriteBatch)` method, passing in the instance of the `SpriteBatch` class you are using for drawing to the screen.  Here is an example

```csharp
spriteBatch.Begin();
sprite.Render(spriteBatch);
spriteBatch.End();
```

## Playing an Animation
Once you've created a new `AnimatedSprite` instance, to play an animation, just called the `AnimatedSprite(string)` method, passing in the name of the animation to play.  Here is an example

```csharp
sprite.Play("run");
```

:::important

The `AnimatedSprite` class makes use of the names of the animation tags defined in the Aseprite file to define the dictionary of animations.  Because of this, each tag in the Aseprite file must have a unique name.

:::

:::note

If the animation that you tell it to play is the current animation that is already playing, then the command is ignored. This is to prevent clipping an animation back to its start.

:::

## Invokable Actions
The `AniamtedSprite` class has three `Action` properties that you can set to be called during different stages of an animation. These are `OnFrameBegin`, `OnFrameEnd` and `OnAnimationLoop`.  Using these actions can give further control to how you use the class.

Before we learn to use these actions however, we need to understand the timing in which each actoin is called.  The following psuedo code serves to demonstrate the update method of the animated sprite to show the timigs of the action invocations.

```
Update
{
    if(animating)
    {
        if(current frame's remaining time equals its duration)
        {
            Invoke OnFrameBegin
        }

        Subtract delta time from current frame's remaining time

        if(current frame's remaining time is zero)
        {
            Invoke OnFrameEnd

            Increment the current frame index by 1

            if(current frame index greater than animations last frame index)
            {
                current frame index equals animation's starting frame index

                Invoke OnAnimationLoop
            }
        }
    }
}
```

### OnFrameBegin
This action is invoked at the beginning of each frame in the animation.  To use it, just set the property value to an `Action` method.  For example.

```csharp
sprite.OnFrameBegin = () => 
{
    //  Your code here to execute at the beginning of each frame.    
}
```

### OnFrameEnd
This action is invoked at the end of each frame in the animation.  To use it, just set the property value to an `Action` method.  For example

```csharp
sprite.OnFrameEnd = () => 
{
    //  Your code here to execute at the end of each frame.
};
```

### OnAnimationLoop
This action is invoked each time an animation loops back to the beginning.  To use it, just set the property value to an `Action` method.  For example

```csharp
sprite.OnAnimationBegin() =>
{
    //  Your code here to execute when an animation loops.
};
```

The `OnAnimationLoop` action is interesting because you can use it to switch to a different animation when the current one finishes playing.  For exmaple, lets say you have an attack animation, and you want to switch to an idle animation after the attack.  You can do so like this

```csharp
sprite.Play("attack");
sprite.OnAnimationLoop = () => 
{
    sprite.Play("idle");
    sprite.OnAnimationLoop = null;
};
```

## Conclusion
The `AnimatedSprite` class provides a quick out-of-the-box solution that takes advantage of the `AsepriteDocument` imported to create sprite animations in your game.  It doesn't require an `AsepriteDocument`, providing methods you can use to set it all up manuallly.  To do this, or f you would like a more indepth look at the `AnimatedSprite` class, check out the [API Documentation](/api/animatedsprite). 