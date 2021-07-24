const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

function hueShift(h,s) { 
    h+=s; while (h>=360.0) h-=360.0; while (h<0.0) h+=360.0; return h; 
}

export { random, hueShift }