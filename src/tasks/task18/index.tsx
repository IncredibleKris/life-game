// только типы

type Shape =
  | {
      type: 'circle';
      radius: number;
    }
  | {
      type: 'square';
      side: number;
    }
  | {
      type: 'rectangle';
      width: number;
      height: number;
    };

const getShapeArea = (shape: Shape): number => {
  if (shape.type === 'circle') {
    const { radius } = shape;
    return Math.PI * radius * radius;
  }
  if (shape.type === 'rectangle') {
    const { width, height } = shape;
    return width * height;
  }
  const { side } = shape;
  return side * side
};

const area = getShapeArea({
  type: 'rectangle',
  width: 5,
  height: 7
});
console.log(area);

