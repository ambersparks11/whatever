namespace SpriteKind {
    export const log = SpriteKind.create()
}
/**
 * ( •̀ ω •́ )-✧
 */
let what_columb = 0
let log: Sprite = null
let gal = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e d d d d d d e . . . . 
    . . . . e 1 f d d f 1 e . . . . 
    . . . . e 1 f d d f 1 e . . . . 
    . . . e e d d d d d d e e . . . 
    . . e e . d d 3 3 d d . e e . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . d d 5 5 5 5 5 5 d d . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . . . d . . d . . . . . . 
    . . . . . . d . . d . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(gal)
scene.setBackgroundImage(assets.image`by the waterfall`)
let waterfall_line = 105
let all_columbs = [105, 45, 85, 65]
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.log)) {
        if (value.y > waterfall_line) {
            value.destroy()
        }
    }
})
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.log)) {
        value.y += 9
    }
    pause(500)
})
game.onUpdateInterval(500, function () {
    log = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . e . . . . 
        . . f e e e e e e e e e e e . . 
        . . e e f f f f f f f e f f . . 
        . . e f f e e e e e e e e f e . 
        . e f e e e e e f f f f e f e . 
        . . f f e f e f f e e e e f . . 
        . . . . . . . . e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.log)
    log.y = 10
    what_columb = randint(0, all_columbs.length - 1)
    log.x = all_columbs[what_columb]
})
