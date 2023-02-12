# Lessons Learned

## Image Circular Arrangement

I realized you can do

- rotate 45deg
- translate 200px
- rotate -45deg

at the same time, which is cool.

```css
transform: rotate(45deg) transform(200px) rotate(-45deg);
```

## React CSS vars

I wanted to insert css vars from React and found this:

```jsx
function Component() {
  const style = { "--my-css-var": 10 } as React.CSSProperties;
  return <div style={style}>...</div>
}
```

[src](https://stackoverflow.com/questions/52005083/how-to-define-css-variables-in-style-attribute-in-react-and-typescript)
