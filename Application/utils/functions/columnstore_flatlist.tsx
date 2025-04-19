export function to_columnstore(data: any[]){
    const tuples = [];
    for (let i = 0; i < data.length; i += 2)
      tuples.push(data.slice(i, i + 2));
    return tuples;
  };