import React, { useEffect } from 'react'
import * as MdIcons from 'react-icons/md'

export default function MenInformation() {
    return (
        <div className="information_wrapper">
            <div className="icon_wrapper">
                <div className="icon"><MdIcons.MdPeople/></div>
                <div className='gret'>Привет, {localStorage.getItem('firstName')}</div>
            </div>
            
            <div className='score'>Твои баллы: {localStorage.getItem('score')}</div>
        </div>
  )
}
