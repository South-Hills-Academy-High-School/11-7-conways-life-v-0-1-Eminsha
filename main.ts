namespace SpriteKind {
    export const cursor = SpriteKind.create()
    export const newcursor = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridRaw += -1
    cursorY += -10
    drawGrid()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    grid[cursorGridRaw][cursorGridColomn] = grid[cursorGridRaw][cursorGridColomn] * -1 + 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridColomn += -1
    cursorX += -10
    drawGrid()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridColomn += 1
    cursorX += 10
    drawGrid()
})
function drawGrid () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    gridSprites = []
    currentY = 0
    for (let raw of grid) {
        currentX = 0
        for (let gridspace of raw) {
            if (gridspace == 1) {
                grideSprite = sprites.create(img`
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 f 7 7 7 f 7 7 
                    7 7 7 f 7 7 7 f 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 f f 7 7 
                    7 7 f f f f f 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    `, SpriteKind.Player)
                grideSprite.left = currentX
                grideSprite.top = currentY
                gridSprites.push(grideSprite)
            }
            currentX += 10
        }
        currentY += 10
    }
    cursor.left = cursorX
    cursor.top = cursorY
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridRaw += 1
    cursorY += 10
    drawGrid()
})
let grideSprite: Sprite = null
let currentX = 0
let currentY = 0
let gridSprites: Sprite[] = []
let cursorY = 0
let cursorX = 0
let cursorGridRaw = 0
let cursorGridColomn = 0
let cursor: Sprite = null
let grid: number[][] = []
grid = []
for (let raw = 0; raw <= 11; raw++) {
    grid.push([])
    for (let colomn = 0; colomn <= 15; colomn++) {
        grid[raw].push(1)
    }
}
cursor = sprites.create(img`
    3 3 3 3 . . . 3 3 3 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    3 . . . 3 3 . . . 3 
    . . . 3 3 3 3 . . . 
    . . . 3 3 3 3 . . . 
    3 . . . 3 3 . . . 3 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    3 3 3 3 . . 3 3 3 3 
    `, SpriteKind.newcursor)
cursorGridColomn = 0
cursorGridRaw = 0
cursorX = 0
cursorY = 0
cursor.z = 10
drawGrid()
game.onUpdate(function () {
    drawGrid()
})
