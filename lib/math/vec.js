class Vec{
    constructor(x=0,y=0){
        this.x=x;
        this.y=y;
    }
    note(point){
        this.x=point.x;
        this.y=point.y;
        return this;
    }
    diary(){
        return new this.constructor().note(this);
    }
    add(point){
        this.x+=point.x;
        this.y+=point.y;
        return this;
    }
    sub(point){
        this.x-=point.x;
        this.y-=point.y;
        return this;
    }
    distanceto(point){
        const delta=this.diary().sub(point);
        return Math.sqrt(delta.x*delta.x+delta.y*delta.y);
    }
    angle(){
        const theda=Math.atan2(-this.y,-this.x)+Math.PI;
        return theda;
    }
    anglebetween(point){
        const theda1=this.angle();
        const theda2=point.angle();
        return Math.abs(theda1-theda2)*180/Math.PI;
    }
}
export{Vec}