import React from "react";
import Item from "./Item";

const List = ({ listData, deleteData, submittingStatue }) => {
    return (
        <div className="list">
            {listData.map((item) => {
                //解構賦值 Destructuring assignment
                const { note, date, time, id } = item;
                return (
                    <Item
                        key={id}
                        id={id}
                        note={note}
                        date={date}
                        time={time}
                        deleteData={deleteData}
                        submittingStatue={submittingStatue}
                    />
                );
            })}
        </div>
    );
};

export default List;
