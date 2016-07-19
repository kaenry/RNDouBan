'use strict'

const ApiHost = 'http://api.douban.com/v2'

export default {
	comming: `${ApiHost}/movie/coming_soon`, // 即将上映的电影
	events: `${ApiHost}/event/list?loc=108288&day_type=weekend&type=party`, // 北京周末趴
}