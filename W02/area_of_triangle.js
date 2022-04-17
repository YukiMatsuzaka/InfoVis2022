function AreaOfTriangle(v0,v1,v2)
{
    v1.sub(v0)
    v2.sub(v0)

    var S = 1 / 2 * Math.sqrt((v1.x * v1.x + v1.y * v1.y + v1.z * v1.z) * (v2.x * v2.x + v2.y * v2.y + v2.z * v2.z) - (v1.x * v2.x + v1.y * v2.y + v1.z * v2.z)**2)
    return S
}