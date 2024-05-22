import Pagination from "@mui/material/Pagination";
import React from 'react';

const PaginationComponent = () => {
  return (
    <div>
      {/* <Stack spacing={2}> */}
        <Pagination count={10} color="primary" />
      {/* </Stack> */}
    </div>
  )
}

export default PaginationComponent
