import VaulDrawer from '~/components/layout/VaulDrawer'
import { DropMenu } from '~/components/layout/DropMenu'
import DynamicDropMenu from '~/components/layout/DynamicDropMenu'
import { fetchTagsShow } from '~/server/db/query'
import { DataProps } from '~/types'
import SearchButton from '~/components/admin/SearchButton'

export default async function DynamicNavbar() {
  const getData = async () => {
    'use server'
    return await fetchTagsShow()
  }

  const data = await getData()

  const props: DataProps = {
    data: data
  }

  return (
    <>
      <div className="flex sm:hidden">
        <SearchButton />
      </div>
      <div className="flex mx-2 sm:hidden">
        <DynamicDropMenu {...props} />
      </div>
      <div className="flex sm:hidden">
        <VaulDrawer/>
      </div>
      <div className="hidden sm:flex space-x-2">
        <DropMenu/>
      </div>
    </>
  )
}