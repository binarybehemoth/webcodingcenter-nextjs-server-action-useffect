'use client';

import { useState, useEffect } from 'react';
import { saveAction } from '@/app/actions';

export default function DataInput() {
  const [data, setData] = useState('');
  useEffect(() => {
    saveAction(data);
  }, [data]);
  return <input type="text" onChange={(e) => setData(e.target.value)} />;
}
