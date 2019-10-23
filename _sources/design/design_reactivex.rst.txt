.. _design_reactivex:

.. highlightlang:: javascript

=============
Reactive X
=============

Reactive X 란 스트림을 비동기적이고 함수적인 방식으로 처리할 수 있도록 도와주는 라이브러리이다. 

예시 `stackblitz <https://stackblitz.com/edit/typescript-xsuqkg?file=index.ts>`_ ::

    import { from, of } from 'rxjs';
    import { map, groupBy, mergeMap, toArray } from 'rxjs/operators';

    const people = [
    { name: 'Sue', age: 25 },
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 25 },
    { name: 'Sarah', age: 35 }
    ];

    let p = from(people);
    p.pipe(map((v) => { v.age++; return v;})).subscribe((v) => {
    console.log(JSON.stringify(v));
    })

----------
Group by
----------

groupby 연산자는 스트림의 데이터를 특정 기준에 따라 묶어서 여러개의 스트림으로 만들어주는 연산자이다.

예시 `stackblitz<https://stackblitz.com/edit/typescript-qnjjnv?file=index.ts>`_::

    import { from, of } from 'rxjs';
    import { groupBy, mergeMap, toArray, count, switchMap,reduce } from 'rxjs/operators';

    const people = [
        { name: 'Sue', age: 25 },
        { name: 'Joe', age: 30 },
        { name: 'Frank', age: 25 },
        { name: 'Sarah', age: 35 }
    ];

    const source = from(people);
    //group by age
    const example = source.pipe(groupBy(person => person.age)).subscribe((eachOb) => {
        eachOb.pipe(reduce((acc, v) => {
            acc.push(v);
            return acc;
        }, [])).subscribe((arr) => {
            console.log(JSON.stringify(arr))
        })
    });

    /* Output:
        [{"name":"Sue","age":25},{"name":"Frank","age":25}]
        [{"name":"Joe","age":30}]
        [{"name":"Sarah","age":35}]
    */