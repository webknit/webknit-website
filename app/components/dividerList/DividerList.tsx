interface Item {
  text: string;
  textLink?: string;
  sideText?: string;
}

interface Props {
  items: Item[];
}

function renderItem(item: Item) {
  const { text, textLink, sideText } = item;

  return (
    <li
      key={text}
      className="border-grey-100 mb-4 flex justify-between border-b border-solid pb-4"
    >
      {textLink ? <a href={textLink}>{text}</a> : text}

      {sideText ?? <span>Nov 2022 - Present</span>}
    </li>
  );
}

export default function DividerList({ items }: Props) {
  return <ul>{items.map((item) => renderItem(item))}</ul>;
}
