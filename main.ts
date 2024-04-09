enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Gap = SpriteKind.create()
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
    animation.setAction(mySprite, ActionKind.Jumping)
    mySprite.startEffect(effects.rings, 300)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gap, function (sprite, otherSprite) {
    if (otherSprite.right - sprite.left < 2) {
        info.changeScoreBy(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let gapSprite: Sprite = null
let gapImage: Image = null
let bottomImage: Image = null
let topImage: Image = null
let gap = 0
let mySprite: Sprite = null
scene.setBackgroundColor(15)
info.setScore(0)
effects.hearts.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . f 3 f . . . 
    . . . . . . . . . f 3 f . . . . 
    . . . . . . . . . f f . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f 3 3 3 3 3 f . . . 
    . . . . f f 3 d 1 f 3 3 d f . . 
    . . . . f 3 3 1 f f 3 d 5 f . . 
    . f f f f 3 3 d f c d d 5 5 f . 
    f d d 3 f f 3 3 3 3 5 5 5 5 5 f 
    f f d 3 3 3 f 3 3 5 5 5 5 5 f . 
    f d f 3 3 3 3 f 3 3 3 3 3 f . . 
    f d d f 3 3 3 f 3 3 3 3 3 3 f . 
    f f d d f f f f 3 3 3 3 3 3 f . 
    . f d d d d d d 3 3 3 3 3 f f . 
    . . f f d d d d d 3 3 3 f f . . 
    . . . f f f f f f f f f f . . . 
    `, SpriteKind.Player)
mySprite.ay = 300
let anim = animation.createAnimation(ActionKind.Jumping, 25)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . f f f f . . . 
    . . . . . . . . . f 3 3 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f 3 3 3 3 3 f . . . 
    . f f f f f 3 3 3 3 3 3 3 f . . 
    . f f 3 f 3 3 3 3 3 3 3 3 f . . 
    . . f 3 3 f 3 d 1 f 3 d 5 f . . 
    . . f f 3 3 f 1 f f 3 5 5 f . . 
    f f f f 3 3 3 d f b 5 5 5 5 f . 
    f d d f f 3 3 f 3 5 5 5 5 5 5 f 
    f d d d f f f 3 3 3 3 3 3 3 f . 
    f f d d d d d 3 3 3 3 3 3 3 f . 
    . f d d d d d d 3 3 3 3 3 f f . 
    . . f f d d d d d 3 3 3 f f . . 
    . . . f f f f f f f f f f . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . f 3 f . . . 
    . . . . . . . . . f 3 f . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f 3 3 3 3 3 f . . . 
    . f f f f f 3 3 3 3 3 3 3 f . . 
    . f d 3 f 3 3 3 3 3 3 3 3 f . . 
    . . f 3 3 f 3 d 1 f 3 d 5 f . . 
    . . f d 3 3 f 1 f f 3 5 5 f . . 
    f f d f 3 3 3 d f b 5 5 5 5 5 f 
    f d d f d 3 3 f 3 5 5 5 5 5 f . 
    f d d d f f f 3 3 3 3 3 3 3 f . 
    f f d d d d d 3 3 3 3 3 3 3 f . 
    . f d d d d d d 3 3 3 3 3 d f . 
    . . f f d d d d d 3 3 3 f f . . 
    . . . f f f f f f f f f f . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . f 3 f . . . 
    . . . . . . . . . f 3 f . . . . 
    . . . . . . . . . f f . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f 3 3 3 3 3 f . . . 
    . . . . f f 3 d 1 f 3 3 d f . . 
    . . . . f 3 3 1 f f 3 d 5 f . . 
    . f f f f 3 3 d f b d d 5 5 f . 
    f d d d f f f 3 3 3 5 5 5 5 5 f 
    f f d 3 3 3 f 3 3 5 5 5 5 5 f . 
    f d f 3 3 3 3 f 3 3 3 3 3 f . . 
    f d d f f 3 3 f 3 3 3 3 3 3 f . 
    f f d d f f f 3 3 3 3 3 3 3 f . 
    . f d d d d d f 3 3 3 3 3 f f . 
    . . f f d d d d d 3 3 3 f f . . 
    . . . f f f f f f f f f f . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . f 3 f . . . 
    . . . . . . . . . f 3 f . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f 3 3 3 3 3 f . . . 
    . . . . f f 3 d 1 f 3 d 5 f f . 
    . . . . f 3 3 1 f f d d 5 5 5 f 
    . . . . f 3 3 d f b 5 5 5 5 f . 
    . . . f f 3 3 3 3 5 5 5 5 f . . 
    . . f d d 3 3 3 3 3 3 3 3 f . . 
    . f d d d d 3 3 3 3 3 3 3 3 f . 
    f d d d f f f 3 3 3 3 3 3 3 f . 
    f d d d 3 3 3 f 3 3 3 3 3 3 f . 
    f f f 3 3 3 f d 3 3 3 3 3 3 f . 
    . f 3 3 f f d d 3 3 3 3 3 f f . 
    . f f f f d d d d 3 3 3 f f . . 
    . . . f f f f f f f f f f . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . f 3 f . . . 
    . . . . . . . . . f 3 f . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f 3 3 3 3 3 f . . . 
    . . . . f f 3 d 1 f 3 d 5 f f . 
    . . . . f 3 3 1 f f d d 5 5 5 f 
    . . . . f 3 3 d f b 5 5 5 5 f . 
    . . . f d 3 3 3 3 5 5 5 5 f . . 
    . f f d d d 3 3 3 3 3 3 3 f . . 
    f d d d f f f 3 3 3 3 3 3 3 f . 
    f d d f 3 3 3 f 3 3 3 3 3 3 f . 
    f f f 3 3 3 f d 3 3 3 3 3 3 f . 
    f f 3 3 f f d d 3 3 3 3 3 3 f . 
    f f f f f d d d 3 3 3 3 3 f f . 
    . . . . f f d d d 3 3 3 f f . . 
    . . . . . . f f f f f f f . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . f 3 f . . . 
    . . . . . . . . . f 3 f . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f 3 3 3 3 3 f . . . 
    . . . . f f 3 d 1 f 3 3 d f . . 
    . . . . f 3 3 1 f f 3 d 5 f . . 
    . . . . f 3 3 d f b d d 5 5 f . 
    . f f f f 3 3 3 3 3 5 5 5 5 5 f 
    f 3 3 3 f f f 3 3 5 5 5 5 5 f . 
    f f 3 3 3 3 f 3 3 3 3 3 3 f . . 
    f d f 3 3 3 3 f 3 3 3 3 3 3 f . 
    f f d f f 3 3 f 3 3 3 3 3 3 f . 
    . f d d f f f d 3 3 3 3 3 f f . 
    . . f f d d d d d 3 3 3 f f . . 
    . . . f f f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    `)
animation.attachAnimation(mySprite, anim)
game.onUpdate(function () {
    if (mySprite.vy > 0) {
        animation.setAction(mySprite, ActionKind.Idle)
    }
    if (mySprite.bottom > 120 || mySprite.top < 0) {
        game.over(false)
    }
})
game.onUpdateInterval(1500, function () {
    gap = randint(0, 3)
    if (gap == 0) {
        topImage = img`
            .....63333333333c66.....
            ....6776633333377676....
            ...677666677776766776...
            ..67766777777777767776..
            ..7668c67768867788666...
            ......c67783336776......
            ......877833336778......
            ......678333338763......
            ......363333333833......
            ......333333333333......
            ......333333333333......
            ......333333333333......
            ......333333333333......
            ......b33333333333......
            .......b33333333b.......
            ........b333333b........
            `
        bottomImage = img`
            ........................
            ........................
            ..........bbbb..........
            ........bbddddbb........
            .......bddbbbbddb.......
            ......bdbbddddbbdb......
            .....bdbbdbbbbdbbdb.....
            .....bdbdbddddbdbdb.....
            .....cdbbdbbbbdbbdc.....
            .....cbdbbddddbbdbc.....
            .....3fbddbbbbddbc3.....
            .....33ffbddddbcc33.....
            .....3333ffcccc333......
            .....c333333333333......
            .....c333333333333......
            .....f333333333333......
            .....cc33333333333......
            ......f33333333333......
            .....6fc33333333336.....
            ....6776333333333676....
            ...677766637777766776...
            ..67768667766777667776..
            ..66688777688677886666..
            ......87773333776c66....
            ......776633338677f.....
            ......333333333338f.....
            ......333333333333f.....
            ......33333333333cf.....
            ......c3333333333cf.....
            ......c3333333333ff.....
            ......f3333333333f6.....
            .....666333333333f6.....
            ....6776333333333676....
            ...677766677776667776...
            ..67767767777777667776..
            ..66687777688677886666..
            .....6677776336777......
            ......3667773336c7......
            ......33f6763333c6......
            ......33c3333333c3......
            ......33c3333333f3......
            ......33c3333333f3......
            ......3333333333f3......
            ......3333333333c3......
            .....63333333333c36.....
            ....6776333333333376....
            ...677666633336766776...
            ..67763377777777667776..
            ...668c37768867788666...
            ......c37733336733......
            ......c36333333633......
            ......c33333333333......
            ......faaa33333a33......
            ......faaa333a3aa3......
            ......faa333aa3aaa......
            ......fa3333aa3aaa......
            ......faaaaa3a33aa......
            .....6f8aaaaaaaaaf6.....
            ....6776aaaaaaaaa676....
            ...677667677777866776...
            ..67768877777778667776..
            ...668aa7768867788666...
            ......aa77aaaa67af......
            ......aa7aaaaaa6af......
            `
    } else if (gap == 1) {
        topImage = img`
            .....6f3333333333f6.....
            ....6776333333333676....
            ...677766633336667776...
            ..68767767777777667786..
            ..66687777688677886666..
            ....6777783333677776....
            ...6777763333336c7776...
            ..677786f3333333c876....
            ...67633c3333333c66.....
            ....6.33c3333333f3......
            ......33c3333333f3......
            ......3333333333f3......
            ......3333333333c3......
            .....66633333333c66.....
            ....6776333333336676....
            ...677666677776766776...
            ..67767777777777667776..
            ..6668c677688677886666..
            ......c67763336763......
            ......336633333633......
            ......333333333333......
            ......333333333333......
            ......333333333333......
            ......333333333333......
            ......a3333333333a......
            ......aa33333333aa......
            ......aaa333333aaa......
            .......aaaaaaaaaa.......
            ........aaaaaaaa........
            ........................
            ........................
            ........................
            `
        bottomImage = img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ..........bbbb..........
            ........bbddddbb........
            .......bddbbbbddb.......
            ......bdbbddddbbdb......
            .....bdbbdbbbbdbbdb.....
            .....bdbdbddddbdbdb.....
            .....cdbbdbbbbdbbdc.....
            .....cbdbbddddbbdbc.....
            .....3fbddbbbbddbc3.....
            .....333fbddddbcc33.....
            .....3333ffcccc333......
            .....a333333333333......
            .....a333333333333......
            .....f333333333333......
            .....aa33333333333......
            ......f33333333333......
            .....6fa33333333336.....
            ....6776333333333676....
            ...677766677776666776...
            ..67768667766777667776..
            ..66683677688677886666..
            ......67776336777c33....
            ......366633336663f.....
            ......333333333333f.....
            ......333333333333f.....
            ......33333333333af.....
            ......a3333333333af.....
            ......a3333333333ff.....
            ......f3333333333f3.....
            .....6f333333333336.....
            ....6776333333333676....
            ...677766677776667776...
            ..67763367777777667776..
            ..66683677688677886666..
            ......677733336763......
            ......3663333336a3......
            ......33f3333333a3......
            ......33a3333333a3......
            ......33a3333333f3......
            ......33a3333333f3......
            ......3333333333f3......
            ......3333333333a3......
            .....66333333333a66.....
            ....6776333333336676....
            ...677666677776766776...
            ..67767777777777667776..
            ..6668a777688677886666..
            ......a66633336733......
            ......a36333333633......
            `
    } else if (gap == 2) {
        topImage = img`
            .....6f3333333333f6.....
            ....6776333333333676....
            ...677766677776667776...
            ..67768667777777667776..
            ..66686777688677886666..
            .....667776333676333....
            ....67776633336776f.....
            ...677763333336776f.....
            ...677633333333677f.....
            ....6633333333336cf.....
            ......33333333333cf.....
            ......33333333333ff.....
            ......f6333333333f3.....
            .....6f7633333333f6.....
            ....6777763333333676....
            ...677767766666667776...
            ..67763667777777667776..
            ..66683677688677886666..
            ......367763336763......
            ......3366333336c3......
            ......33f3333333c3......
            ......33c3333333c3......
            ......33c3333333f3......
            ......33c3333333f3......
            ......3333333333f3......
            ......3333333333c3......
            .....66333333333336.....
            ....6776333333366676....
            ...677666663366766776...
            ..67763677766777667776..
            ..6668367768867788666...
            ......c36766336763......
            ......333633333633......
            ......333333333333......
            ......333333333333......
            ......333333333333......
            ......333333333333......
            ......a3333333333a......
            ......aa33333333aa......
            ......aaa333333aaa......
            .......aaaaaaaaaa.......
            ........aaaaaaaa........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `
        bottomImage = img`
            ........................
            ........................
            ........................
            ........................
            ..........bbbb..........
            ........bbddddbb........
            .......bddbbbbddb.......
            ......bdbbddddbbdb......
            .....bdbbdbbbbdbbdb.....
            .....bdbdbddddbdbdb.....
            .....cdbbdbbbbdbbdc.....
            .....cbdbbddddbbdbc.....
            .....3fbddbbbbddbc3.....
            .....33ffbddddbcc33.....
            .....3333ffcccc333......
            .....c333333333333......
            .....c333333333333......
            .....f333333333333......
            .....cc33333333333......
            ......f33333333333......
            .....6fc33333333366.....
            ....6776333333333676....
            ...677766666666666776...
            ..67768367766777667776..
            ..66683677688677886666..
            ......36776336776c33....
            ......336633336633f.....
            ......333333333333f.....
            ......333333333333f.....
            ......33333333333cf.....
            ......c3333333333cf.....
            ......c3333333333ff.....
            ......f3333333333f3.....
            .....6f3333333333f6.....
            ....6776333333333676....
            ...677766666666667776...
            ..67763667777777667776..
            ..66683677688677886666..
            ......367733336763......
            ......3363333336c3......
            `
    } else {
        topImage = img`
            .....6fc33333333336.....
            ....6777333333333676....
            ...677766633333666776...
            ..67768367766777667776..
            ..66683377688677886666..
            ......33773333773c33....
            ......336333333733f.....
            ......333333333333f.....
            ......333333333333f.....
            ......33333333333cf.....
            ......c3333333333cf.....
            ......c3333333333ff.....
            ......f3333333333f3.....
            .....6f3333333333f6.....
            ....6776333333333676....
            ...677766633336667776...
            ..67763367777777667776..
            ..66683377688677886666..
            ......33733333673333....
            ......3363333336c3f.....
            ......333333333333f.....
            ......333333333333f.....
            ......33333333333cf.....
            ......33333333333cf.....
            ......33333333333ff.....
            ......f3333333333f3.....
            .....6f3333333333f6.....
            ....6776333333333676....
            ...677766666666667776...
            ..67763367777777667776..
            ..66683377688677886666..
            ......337733336733......
            ......3363333336c3......
            ......33f3333333c3......
            ......33c3333333c3......
            ......33c3333333f3......
            ......33c3333333f3......
            ......3333333333f3......
            ......3333333333c3......
            .....63333333333c36.....
            ....6776333333333676....
            ...677666633336766776...
            ..67763377777777667776..
            ..6668c377688677886666..
            ......c37733336733......
            ......333333333333......
            ......333333333333......
            ......333333333333......
            ......333333333333......
            ......a3333333333a......
            ......aa33333333aa......
            ......aaa333333aaa......
            ......aaaaaaaaaaaa......
            .......aaaaaaaaaa.......
            ........aaaaaaaa........
            ........................
            `
        bottomImage = img`
            ........................
            ..........bbbb..........
            ........bbddddbb........
            .......bddbbbbddb.......
            ......bdbbddddbbdb......
            .....bdbbdbbbbdbbdb.....
            .....bdbdbddddbdbdb.....
            .....cdbbdbbbbdbbdc.....
            .....cbdbbddddbbdbc.....
            .....3fbddbbbbddbc3.....
            .....33ffbddddbcc33.....
            .....3333ffcccc333......
            .....c333333333333......
            .....c333333333333......
            .....f333333333333......
            .....cc33333333333......
            ......f33333333333......
            .....6fc33333333366.....
            ....6776333333333676....
            ...677766666666666776...
            ..67768367766777667776..
            ..66683677688677886666..
            ......36776333773c33....
            ......366663333633f.....
            `
    }
    gapImage = image.create(2, scene.screenHeight())
    gapImage.fill(1)
    gapSprite = sprites.create(gapImage, SpriteKind.Gap)
    gapSprite.setFlag(SpriteFlag.AutoDestroy, true)
    gapSprite.setFlag(SpriteFlag.Invisible, true)
    gapSprite.left = scene.screenWidth()
    gapSprite.vx = -45
    projectile = sprites.createProjectileFromSide(topImage, -45, 0)
    projectile.top = 0
    projectile = sprites.createProjectileFromSide(bottomImage, -45, 0)
    projectile.bottom = scene.screenHeight()
})
