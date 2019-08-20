```javascript
<Table
  headers={
    <Table.Row>
      <Table.Header>One</Table.Header>
      <Table.Header>Two</Table.Header>
      <Table.Header sortable>Three</Table.Header>
    </Table.Row>
  }
>
  <Table.Row>
    <Table.Cell>1</Table.Cell>
    <Table.Cell>Foo</Table.Cell>
    <Table.Cell>Bar</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>2</Table.Cell>
    <Table.Cell>Foo</Table.Cell>
    <Table.Cell>Bar</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>3</Table.Cell>
    <Table.Cell>Foo</Table.Cell>
    <Table.Cell>Bar</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>4</Table.Cell>
    <Table.Cell>Foo</Table.Cell>
    <Table.Cell>Bar</Table.Cell>
  </Table.Row>
</Table>
```

_A long table_

```javascript
const lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.";

<Table
  headers={
    <Table.Row>
      <Table.Header>One</Table.Header>
      <Table.Header>Two</Table.Header>
      <Table.Header>Three</Table.Header>
      <Table.Header>Four</Table.Header>
      <Table.Header>Five</Table.Header>
      <Table.Header>Six</Table.Header>
      <Table.Header>Seven</Table.Header>
    </Table.Row>
  }
>
  {new Array(4).fill(null).map((_, idx) => (
    <Table.Row key={idx}>
      <Table.Cell>{lipsum}</Table.Cell>
      <Table.Cell>{lipsum}</Table.Cell>
      <Table.Cell>{lipsum}</Table.Cell>
      <Table.Cell>{lipsum}</Table.Cell>
      <Table.Cell>{lipsum}</Table.Cell>
      <Table.Cell>{lipsum}</Table.Cell>
      <Table.Cell>{lipsum}</Table.Cell>
    </Table.Row>
  ))}
</Table>;
```

_A small table_

```javascript
<Table.Small
  headers={
    <Table.Row>
      <Table.Header>One</Table.Header>
      <Table.Header>Two</Table.Header>
      <Table.Header sortable>Three</Table.Header>
    </Table.Row>
  }
>
  <Table.Row>
    <Table.Cell>1</Table.Cell>
    <Table.Cell>Foo</Table.Cell>
    <Table.Cell>Bar</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>2</Table.Cell>
    <Table.Cell>Foo</Table.Cell>
    <Table.Cell>Bar</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>3</Table.Cell>
    <Table.Cell>Foo</Table.Cell>
    <Table.Cell>Bar</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>4</Table.Cell>
    <Table.Cell>Foo</Table.Cell>
    <Table.Cell>Bar</Table.Cell>
  </Table.Row>
</Table.Small>
```
