import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { saveAs } from 'file-saver';

import Table from '../../components/Table/Table';

// @data
import { datasets } from '../../data/datasetsdata';
import { nftData } from '../../data/nftdata';
import { movieData } from '../../data/moviedata';
import { petrolData } from '../../data/petroldata';
import { foodData } from '../../data/fooddata';

// @icons
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import CloudDownloadRoundedIcon from '@mui/icons-material/CloudDownloadRounded';

// @styling
import './datasetsitem.scss';

const DatasetsItem = () => {
  const [downloadCount, setDownloadCount] = useState(0);
  const [pageloadCount, setPageloadCount] = useState(0);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  const params = useParams();
  let datasetId = parseInt(params.id);
  let data = datasets.find((dataset) => dataset.id === datasetId);

  const downloadFile = () => {
    saveAs(data.file, data.title);

    setDownloadCount(downloadCount + 1);
    setPageloadCount(pageloadCount + 1);
  };

  useEffect(() => {
    if (data.id === 1) {
      setRows([...petrolData.slice(0, 5).map((item) => item)]);

      setColumns([
        {
          field: 'Date',
          headerName: 'Date',
          width: 150,
        },
        {
          field: 'Diesel (USD)',
          headerName: 'Diesel (USD)',
          width: 150,
        },
        {
          field: 'difference',
          headerName: 'Difference',
          width: 150,
        },
        {
          field: 'Number of Records',
          headerName: 'Number of Records',
          width: 150,
        },
        {
          field: 'Petrol (USD)',
          headerName: 'Petrol (USD)',
          width: 150,
        },
      ]);
    } else if (data.id === 2) {
      setRows([...foodData.slice(0, 5).map((item) => item)]);

      setColumns([
        {
          field: 'ItemLabels',
          headerName: 'Item Labels',
          width: 250,
        },
        {
          field: '17-Jan',
          headerName: '17-Jan',
          width: 150,
        },
        {
          field: '17-Feb',
          headerName: '17-Feb',
          width: 150,
        },
        {
          field: '17-Mar',
          headerName: '17-Mar',
          width: 150,
        },
        {
          field: '17-Apr',
          headerName: '17-Apr',
          width: 150,
        },
        {
          field: '17-May',
          headerName: '17-May',
          width: 150,
        },
        {
          field: '17-Jun',
          headerName: '17-Jun',
          width: 150,
        },
        {
          field: '17-Jul',
          headerName: '17-Jul',
          width: 150,
        },
        {
          field: '17-Aug',
          headerName: '17-Aug',
          width: 150,
        },
        {
          field: '17-Sep',
          headerName: '17-Sep',
          width: 150,
        },
        {
          field: '17-Oct',
          headerName: '17-Oct',
          width: 150,
        },
        {
          field: '17-Nov',
          headerName: '17-Nov',
          width: 150,
        },
        {
          field: '17-Dec',
          headerName: '17-Dec',
          width: 150,
        },
        {
          field: '18-Jan',
          headerName: '18-Jan',
          width: 150,
        },
        {
          field: '18-Feb',
          headerName: '18-Feb',
          width: 150,
        },
        {
          field: '18-Mar',
          headerName: '18-Mar',
          width: 150,
        },
        {
          field: '18-Apr',
          headerName: '18-Apr',
          width: 150,
        },
        {
          field: '18-May',
          headerName: '18-May',
          width: 150,
        },
        {
          field: '18-Jun',
          headerName: '18-Jun',
          width: 150,
        },
        {
          field: '18-Jul',
          headerName: '18-Jul',
          width: 150,
        },
        {
          field: '18-Aug',
          headerName: '18-Aug',
          width: 150,
        },
        {
          field: '18-Sep',
          headerName: '18-Sep',
          width: 150,
        },
        {
          field: '18-Oct',
          headerName: '18-Oct',
          width: 150,
        },
        {
          field: '18-Nov',
          headerName: '18-Nov',
          width: 150,
        },
        {
          field: '18-Dec',
          headerName: '18-Dec',
          width: 150,
        },
        {
          field: '19-Jan',
          headerName: '19-Jan',
          width: 150,
        },
        {
          field: '19-Feb',
          headerName: '19-Feb',
          width: 150,
        },
        {
          field: '19-Mar',
          headerName: '19-Mar',
          width: 150,
        },
        {
          field: '19-Apr',
          headerName: '19-Apr',
          width: 150,
        },
        {
          field: '19-May',
          headerName: '19-May',
          width: 150,
        },
        {
          field: '19-Jun',
          headerName: '19-Jun',
          width: 150,
        },
        {
          field: '19-Jul',
          headerName: '19-Jul',
          width: 150,
        },
        {
          field: '19-Aug',
          headerName: '19-Aug',
          width: 150,
        },
        {
          field: '19-Sep',
          headerName: '19-Sep',
          width: 150,
        },
        {
          field: '19-Oct',
          headerName: '19-Oct',
          width: 150,
        },
        {
          field: '19-Nov',
          headerName: '19-Nov',
          width: 150,
        },
        {
          field: '19-Dec',
          headerName: '19-Dec',
          width: 150,
        },
        {
          field: '20-Jan',
          headerName: '20-Jan',
          width: 150,
        },
        {
          field: '20-Feb',
          headerName: '20-Feb',
          width: 150,
        },
        {
          field: '20-Mar',
          headerName: '20-Mar',
          width: 150,
        },
        {
          field: '20-Apr',
          headerName: '20-Apr',
          width: 150,
        },
        {
          field: '20-May',
          headerName: '20-May',
          width: 150,
        },
        {
          field: '20-Jun',
          headerName: '20-Jun',
          width: 150,
        },
        {
          field: '20-Jul',
          headerName: '20-Jul',
          width: 150,
        },
        {
          field: '20-Aug',
          headerName: '20-Aug',
          width: 150,
        },
        {
          field: '20-Sep',
          headerName: '20-Sep',
          width: 150,
        },
        {
          field: '20-Oct',
          headerName: '20-Oct',
          width: 150,
        },
        {
          field: '20-Nov',
          headerName: '20-Nov',
          width: 150,
        },
        {
          field: '20-Dec',
          headerName: '20-Dec',
          width: 150,
        },
        {
          field: '21-Jan',
          headerName: '21-Jan',
          width: 150,
        },
        {
          field: '21-Feb',
          headerName: '21-Feb',
          width: 150,
        },
        {
          field: '21-Mar',
          headerName: '21-Mar',
          width: 150,
        },
        {
          field: '21-Apr',
          headerName: '21-Apr',
          width: 150,
        },
        {
          field: '21-Apr',
          headerName: '21-Apr',
          width: 150,
        },
        {
          field: '21-May',
          headerName: '21-May',
          width: 150,
        },
        {
          field: '21-Jun',
          headerName: '21-Jun',
          width: 150,
        },
        {
          field: '21-Jul',
          headerName: '21-Jul',
          width: 150,
        },
        {
          field: '21-Aug',
          headerName: '21-Aug',
          width: 150,
        },
        {
          field: '21-Sep',
          headerName: '21-Sep',
          width: 150,
        },
        {
          field: '21-Oct',
          headerName: '21-Oct',
          width: 150,
        },
        {
          field: '21-Nov',
          headerName: '21-Nov',
          width: 150,
        },
        {
          field: '21-Dec',
          headerName: '21-Dec',
          width: 150,
        },
        {
          field: 'Lowest',
          headerName: 'Lowest',
          width: 150,
        },
        {
          field: 'Highest',
          headerName: 'Highest',
          width: 150,
        },
        {
          field: 'Month-on-Month',
          headerName: 'Month-on-Month',
          width: 150,
        },
        {
          field: 'Year-on-Year',
          headerName: 'Year-on-Year',
          width: 150,
        },
      ]);
    } else if (data.id === 3) {
      setRows([...nftData.slice(0, 5).map((item) => item)]);

      setColumns([
        {
          field: 'Name',
          headerName: 'Name',
          width: 250,
        },
        {
          field: 'Volume',
          headerName: 'Volume',
          width: 150,
        },
        {
          field: 'Volume_USD',
          headerName: 'Volume_USD',
          width: 150,
        },
        {
          field: 'Market_Cap',
          headerName: 'Market_Cap',
          width: 150,
        },
        {
          field: 'Market_Cap_USD',
          headerName: 'Market_Cap_USD',
          width: 150,
        },
        {
          field: 'Sales',
          headerName: 'Sales',
          width: 150,
        },
        {
          field: 'Floor_Price',
          headerName: 'Floor_Price_USD',
          width: 150,
        },
        {
          field: 'Average_Price',
          headerName: 'Average_Price',
          width: 150,
        },
        {
          field: 'Average_Price_USD',
          headerName: 'Average_Price_USD',
          width: 150,
        },
        {
          field: 'Owners',
          headerName: 'Owners',
          width: 150,
        },
        {
          field: 'Assets',
          headerName: 'Assets',
          width: 150,
        },
        {
          field: 'Owner_Asset_Ratio',
          headerName: 'Owner_Asset_Ratio',
          width: 150,
        },
        {
          field: 'Category',
          headerName: 'Category',
          width: 150,
        },
        {
          field: 'Website',
          headerName: 'Website',
          width: 150,
        },
      ]);
    } else if (data.id === 4) {
      setRows([...movieData.slice(0, 5).map((item) => item)]);

      setColumns([
        {
          field: 'Title',
          headerName: 'Title',
          width: 280,
        },
        {
          field: 'Movie Info',
          headerName: 'Movie Info',
          flex: 1,
          minWidth: 300,
        },
        {
          field: 'Distributor',
          headerName: 'Distributor',
          width: 200,
        },
        {
          field: 'Release Date',
          headerName: 'Release Date',
          width: 200,
        },
        {
          field: 'Domestic Sales (in $)',
          headerName: 'Domestic Sales (in $)',
          width: 200,
        },
        {
          field: 'International Sales (in $)',
          headerName: 'International Sales (in $)',
          width: 200,
        },
        {
          field: 'World Sales (in $)',
          headerName: 'World Sales (in $)',
          width: 200,
        },
        {
          field: 'Genre',
          headerName: 'Genre',
          width: 200,
          valueFormatter: (params) => {
            // const valueFormatted =
            // return `${valueFormatted}`;
            console.log('formatted:', params);
          },
        },
        {
          field: 'Movie Runtime',
          headerName: 'Movie Runtime',
          width: 200,
        },
        {
          field: 'License',
          headerName: 'License',
          width: 200,
        },
      ]);
    }
  }, [data.id]);

  console.log('rows:', rows);
  console.log('columns:', columns);

  return (
    <div className='datasetsitem'>
      <div className='datasetsitem__container'>
        <header className='datasetsitem__hero'>
          <div className='datasetsitem__img'>
            <img src={data.img} alt={data.alt} />
          </div>

          <div className='datasetsitem__text'>
            <h3>{data.title}</h3>
          </div>
        </header>

        <div className='datasetsitem__info'>
          <div className='datasetsitem__tag'>
            <LocalOfferRoundedIcon className={data.tag} />
            <p>{data.tag}</p> <span />
          </div>
          <div className='datasetsitem__size'>
            <CloudDownloadRoundedIcon className='size__icon' />
            <p>{data.size}</p> <span />
          </div>
          <div className='datasetsitem__type'>
            <p>CSV</p> <span />
          </div>
          <div className='datasetsitem__download__button'>
            <FileDownloadRoundedIcon className='download__icon' />
            <p>Download</p>
          </div>
        </div>

        <div className='datasetsitem__description'>
          <div className='datasetsitem__description__container'>
            <div className='datasetsitem__description__item'>
              <p>{data.description}</p>
            </div>
          </div>
        </div>

        {/* table */}
        <div className='datasetsitem__table'>
          <div className='datasetsitem__table__container'>
            <div className='datasetsitem__table__heading'>
              <h3>Preview</h3>
            </div>
            <Table
              columns={data.id ? columns : null}
              rows={data.id ? rows : null}
            />
          </div>
        </div>

        <div className='datasetsitem__sources'>
          <div className='datasetsitem__sources__container'>
            <div className='datasetsitem__sources__item'>
              <h3 className='datasetsitem__sources__heading'>Sources</h3>
              <a href={data.source}>{data.source}</a>
            </div>
          </div>
        </div>

        <div className='datasetsitem__download'>
          <div className='datasetsitem__download__container'>
            <div className='datasetsitem__download__item'>
              <h3 className='datasetsitem__download__heading'>Download</h3>
              <div
                className='datasetsitem__download__button'
                onClick={downloadFile}
              >
                <FileDownloadRoundedIcon className='datasetsitem__download__icon' />
              </div>
              <div className='datasetsitem__download__info'>
                <p>{pageloadCount} views</p>
                <span />
                <p>{downloadCount} downloads</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatasetsItem;
