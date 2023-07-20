import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '.././_app';
import DashboardLayout from '@/layouts/DashboardLayout';

const AddPost: NextPageWithLayout = () => {
  return (
    <section>
      <p>Add post</p>
    </section>
  );
};

AddPost.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AddPost;
