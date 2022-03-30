import React from 'react';

function NavDefault(){
    return(
        <div className="link-status">
                <ul id="myMenu">
                    <li data-menuanchor="page1" class="active"><a href="#page1">Превью</a></li>
                    <li data-menuanchor="page2" class=""><a href="#page2">Описание</a></li>
                </ul>
        </div>
    )
}

export default NavDefault