import React from 'react'

type CardsProps<T> = {
    data: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    containerClassName?: string;
}

const Cards = <T,>({data,renderItem,containerClassName=''}:CardsProps<T>) => {
  return (
     <>
        {data.map((item, index) =>
            renderItem(item, index)
        )}
      </>
  )
}

export default Cards