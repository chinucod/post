import React, { useState } from "react";
import Scroll from "./Scroll";
import Search from "./Search";

function SearchedList({details}) {
    const [searchFiled,setSearchField]=useState("");

    const filteredTitle = details.filter(
        item=>{
            return(
                itemtitle.toLowerCase().inCludes(searchFiled.toLowerCase()) ||
                item.body.toLowerCase().inCludes(searchFiled.toLowerCase())
            );
        }
    );
    const handleChange= e =>{
        setSearchField(e.target.value);
    };

    function searchList(){
        return(
            <Scroll>
                <SearchedList filteredTitle={filteredTitle}/>
            </Scroll>
        );
    }

    
}