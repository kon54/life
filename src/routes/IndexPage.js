import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Life from '../components/Life'
import 'antd/dist/antd.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Life />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
