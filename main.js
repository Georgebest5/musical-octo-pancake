function preload()
{

}
function setup()
{
    canvas=createCanvas(600,600)
    canvas.position(100,300)
    video=createCapture(VIDEO)
    video.hide()
    tint_color=""
}
function draw()
{
    img(video,0,0,600,600)
    tint(tint_color)
    circle(30, 30, 20);
}