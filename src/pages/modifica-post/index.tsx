import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '.././_app';
import DashboardLayout from '@/layouts/DashboardLayout';

const UpdatePost: NextPageWithLayout = () => {
  return (
    <section>
      <p>Update post</p>
    </section>
  );
};

UpdatePost.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default UpdatePost;
