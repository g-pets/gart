export const starVertexShader = `
	uniform float time;
	varying vec3 vPosition;
	uniform vec2 pixels;
	float PI = 3.141592653589793238;
	
	void main() {
		vPosition = position;
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
		// gl_Position = projectionMatrix * vPosition;
	}
`