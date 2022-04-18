class Vec3
{
    constructor( x, y, z )
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add( v )
    {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }

    sub( v )
    {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }

    sum()
    {
        return this.x + this.y + this.z;
    }

    min()
    {
        //return Math.min( this.x, this.y, this.z );
        const m =  this.x < this.y ? this.x : this.y;
        return m < this.z ? m : this.z;
    }

    max()
    {
        //return Math.max( this.x, this.y, this.z );
        const m = this.x > this.y ? this.x : this.y;
        return m > this.z ? this.z : m;}

    mid()
    {
        return this.sum() - this.min() - this.max();
    }

    cross( v )
    {
        var x = this.x, y = this.y, z = this.z;
        this.x = y * v.z - z * v.y;
        this.y = z * v.x - x * v.z;
        this.z = x * v.y - y * v.x;
        return this;
    }

    length()
    {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }
    min()
    {
        var min_v = this.x;

        if (min_v >= this.y){min_v = this.y}
        if (min_v >= this.z){min_v = this.z}

        return min_v;
    }

    mid()
    {
        if (this.x >= this.y)
        {
            if (this.y >= this.z){return this.y}
            else if (this.x >= this.z){return this.z}
            else{return this.x}
        }
        else
        {
            if (this.x >= this.z){return this.x}
            else if (this.y >= this.z){return this.z}
            else{return this.y}
        }
    }
    max()
    {
        var max_v = this.x;

        if (max_v <= this.y){max_v = this.y}
        if (max_v <= this.z){max_v = this.z}

        return max_v;
    }
}