function Body() {
    return (
        <>
            <table style={{border:'2px solid black'}}>
                <thead>
                    <tr>
                        
                        <th rowSpan={2}>Time/Day</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th></th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                    </tr>
                    <tr>
                        <td>08.50-09.40</td>
                        <td>09.40-10.30</td>
                        <td>10.40-11.30</td>
                        <td>11.30-12.20</td>
                        <td>12.20-01.10</td>
                        <td>01.10-02.00</td>
                        <td>02.00-02.50</td>
                        <td>02.50-03.40</td>
                        <td>03.40-04.30</td>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>**Monday**</td>
                        {/* Corrected: colspan -> colSpan */}
                        <td colSpan={2} style={{ textAlign: 'center', backgroundColor: 'rgb(166, 86, 99)' }}>BCS553</td>
                        <td style={{ backgroundColor: 'aqua' }}>BCS502</td>
                        <td style={{ backgroundColor: 'rgb(166, 86, 99)' }}>BCS503</td>
                        <td style={{ backgroundColor: 'grey' }}>BCS055</td>
                        {/* Corrected: rowspan -> rowSpan */}
                        <td rowSpan={5} style={{ textAlign: 'center' }}>**Break**</td>
                        <td style={{ backgroundColor: 'red' }}>BCS501</td>
                        <td style={{ backgroundColor: 'rgb(166, 86, 99)' }}>BCS503</td>
                        <td style={{ backgroundColor: 'lightblue' }}>BCS054</td>
                    </tr>

                    {/* Tuesday */}
                    <tr>
                        <td>**Tuesday**</td>
                        <td colSpan={2} style={{ textAlign: 'center', backgroundColor: 'red' }}>BCS551</td>
                        <td style={{ backgroundColor: 'aqua' }}>BCS502</td>
                        <td colSpan={2} style={{ textAlign: 'center', backgroundColor: 'yellow' }}>AAI</td>
                        {/* The break cell is spanned from Monday */}
                        <td colSpan={2} style={{ textAlign: 'center', backgroundColor: 'orange' }}>FSD</td>
                        <td style={{ backgroundColor: 'red' }}>BCS501</td>
                    </tr>

                    {/* Wednesday */}
                    <tr>
                        <td>**Wednesday**</td>
                        <td colSpan={2} style={{ textAlign: 'center', backgroundColor: 'orange' }}>FSD</td>
                        <td colSpan={2} style={{ textAlign: 'center', backgroundColor: 'purple' }}>DS</td>
                        <td style={{ backgroundColor: 'red' }}>BCS501</td>
                        {/* The break cell is spanned from Monday */}
                        <td colSpan={3} style={{ textAlign: 'center', backgroundColor: 'lightgreen' }}>DSA</td>
                    </tr>

                    {/* Thursday */}
                    <tr>
                        <td>**Thursday**</td>
                        <td style={{ backgroundColor: 'grey' }}>BCS055</td>
                        <td style={{ backgroundColor: 'aqua' }}>BCS502</td>
                        <td style={{ backgroundColor: 'burlywood' }}>VASS501</td>
                        <td style={{ backgroundColor: 'rgb(166, 86, 99)' }}>BCS503</td>
                        <td style={{ backgroundColor: 'lightblue' }}>BCS054</td>
                        {/* The break cell is spanned from Monday */}
                        <td style={{ backgroundColor: 'aqua' }}>BCS552</td>
                        <td style={{ backgroundColor: 'red' }}>BCS501</td>
                        <td style={{ backgroundColor: 'aqua' }}>BCS502</td>
                    </tr>

                    {/* Friday */}
                    <tr>
                        <td>**Friday**</td>
                        <td colSpan={3} style={{ textAlign: 'center', backgroundColor: 'lightgreen' }}>DSA</td>
                        <td style={{ backgroundColor: 'lightblue' }}>BCS054</td>
                        <td style={{ backgroundColor: 'grey' }}>BCS055</td>
                        {/* The break cell is spanned from Monday */}
                        <td style={{ backgroundColor: 'rgb(166, 86, 99)' }}>BCS503</td>
                        <td colSpan={2} style={{ textAlign: 'center', backgroundColor: 'rgb(212, 191, 163)' }}>QA/LR</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Body;