"use client"

import React from 'react'
import {useTranslations, useLocale} from 'next-intl'
import {useRouter, usePathname} from 'next-intl/navigation'
import { Button, Typography, Space, Input, Select, DatePicker, Switch, Checkbox, Radio, Slider, Rate, Tabs, Tag, Alert, Card, ConfigProvider, App, theme as antdTheme, Dropdown } from 'antd'
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { SearchOutlined, SmileOutlined } from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography

export default function HomePage() {
  const t = useTranslations('Common')
  const [isDark, setIsDark] = React.useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale() as 'en' | 'zh'
  const algorithm = isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm
  const antdLocale = locale === 'zh' ? zhCN : enUS

  React.useEffect(() => {
    dayjs.locale(locale === 'zh' ? 'zh-cn' : 'en')
  }, [locale])

  return (
    <main style={{ padding: 24 }}>
      <ConfigProvider theme={{ algorithm, token: { colorPrimary: '#6f53ff' } }} locale={antdLocale}>
        <App>
          <Typography>
            <Title level={2}>{t('hello')}</Title>
            <Paragraph>
              <Text strong>Next.js + Ant Design + next-intl</Text>
            </Paragraph>
          </Typography>

          <Space style={{ marginBottom: 16 }}>
            <Switch checked={isDark} onChange={setIsDark} checkedChildren={t('dark')} unCheckedChildren={t('light')} />
            <Dropdown
              menu={{
                items: [
                  { key: 'en', label: 'English', onClick: async () => { localStorage.setItem('locale', 'en'); document.cookie = 'NEXT_LOCALE=en; path=/; max-age=31536000'; await router.replace({pathname}, {locale: 'en'}) } },
                  { key: 'zh', label: '简体中文', onClick: async () => { localStorage.setItem('locale', 'zh'); document.cookie = 'NEXT_LOCALE=zh; path=/; max-age=31536000'; await router.replace({pathname}, {locale: 'zh'}) } },
                ],
              }}
            >
              <Button>{t('language')}: {locale === 'en' ? 'English' : '简体中文'}</Button>
            </Dropdown>
          </Space>

          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Card title={t('buttons')}>
              <Space wrap>
                <Button type="primary">{t('primary')}</Button>
                <Button>{t('default')}</Button>
                <Button type="dashed">{t('dashed')}</Button>
                <Button type="text">{t('text')}</Button>
                <Button type="link">{t('link')}</Button>
                <Button icon={<SearchOutlined />}>{t('withIcon')}</Button>
              </Space>
            </Card>

            <Card title={t('inputs')}>
              <Space direction="vertical" style={{ width: 360 }}>
                <Input placeholder={t('basicInput')} />
                <Input prefix={<SearchOutlined />} placeholder={t('search')} allowClear />
                <Select
                  placeholder={t('selectAnOption')}
                  options={[
                    { label: 'Option A', value: 'A' },
                    { label: 'Option B', value: 'B' },
                    { label: 'Option C', value: 'C' },
                  ]}
                />
                <DatePicker style={{ width: '100%' }} />
              </Space>
            </Card>

            <Card title={t('selectors')}>
              <Space wrap>
                <Switch defaultChecked />
                <Checkbox defaultChecked>{t('checkbox')}</Checkbox>
                <Radio.Group defaultValue="a">
                  <Radio value="a">A</Radio>
                  <Radio value="b">B</Radio>
                  <Radio value="c">C</Radio>
                </Radio.Group>
                <Slider style={{ width: 200 }} />
                <Rate defaultValue={3} character={<SmileOutlined />} />
              </Space>
            </Card>

            <Card title={t('tabsFeedback')}>
              <Tabs
                items={[
                  { key: '1', label: t('tab1'), children: <div>{t('tab1Content')}</div> },
                  { key: '2', label: t('tab2'), children: <Alert message={t('info')} description={t('someInfo')} type="info" showIcon /> },
                ]}
              />
              <Space>
                <Tag color="blue">{t('blue')}</Tag>
                <Tag color="purple">{t('purple')}</Tag>
                <Tag color="gold">{t('gold')}</Tag>
              </Space>
            </Card>
          </Space>
        </App>
      </ConfigProvider>
    </main>
  )
}


