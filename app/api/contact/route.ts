import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    // 필수 필드 검증
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      )
    }

    // 현재 시간 (한국 시간)
    const now = new Date()
    const koreaTime = new Intl.DateTimeFormat('ko-KR', {
      timeZone: 'Asia/Seoul',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      weekday: 'long',
    }).format(now)

    // 이메일 발송 (노션 스타일)
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'sj6363@hanmail.net',
      subject: `📬 새 문의 | ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <div style="max-width: 580px; margin: 0 auto; padding: 40px 20px;">
            
            <!-- Header -->
            <div style="margin-bottom: 32px;">
              <div style="display: inline-block; background: #f7f6f3; padding: 6px 12px; border-radius: 4px; font-size: 12px; color: #9b9a97; margin-bottom: 12px;">
                서전텍 웹사이트
              </div>
              <h1 style="margin: 0; font-size: 32px; font-weight: 700; color: #37352f; letter-spacing: -0.5px;">
                새로운 문의가 도착했습니다
              </h1>
              <p style="margin: 8px 0 0 0; font-size: 14px; color: #9b9a97;">
                ${koreaTime}
              </p>
            </div>

            <!-- Divider -->
            <hr style="border: none; border-top: 1px solid #e9e9e7; margin: 24px 0;">

            <!-- Customer Info Section -->
            <div style="margin-bottom: 32px;">
              <h2 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #9b9a97; text-transform: uppercase; letter-spacing: 0.5px;">
                고객 정보
              </h2>
              
              <!-- Info Cards -->
              <div style="background: #f7f6f3; border-radius: 8px; overflow: hidden;">
                <!-- 이름 -->
                <div style="padding: 14px 16px; border-bottom: 1px solid #e9e9e7;">
                  <div style="display: flex; align-items: center;">
                    <span style="font-size: 13px; color: #9b9a97; width: 80px; flex-shrink: 0;">이름</span>
                    <span style="font-size: 15px; color: #37352f; font-weight: 500;">${name}</span>
                  </div>
                </div>
                
                <!-- 이메일 -->
                <div style="padding: 14px 16px; border-bottom: 1px solid #e9e9e7;">
                  <div style="display: flex; align-items: center;">
                    <span style="font-size: 13px; color: #9b9a97; width: 80px; flex-shrink: 0;">이메일</span>
                    <a href="mailto:${email}" style="font-size: 15px; color: #2383e2; text-decoration: none; font-weight: 500;">${email}</a>
                  </div>
                </div>
                
                <!-- 연락처 -->
                <div style="padding: 14px 16px;">
                  <div style="display: flex; align-items: center;">
                    <span style="font-size: 13px; color: #9b9a97; width: 80px; flex-shrink: 0;">연락처</span>
                    <a href="tel:${phone}" style="font-size: 15px; color: #2383e2; text-decoration: none; font-weight: 500;">${phone}</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Message Section -->
            <div style="margin-bottom: 32px;">
              <h2 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #9b9a97; text-transform: uppercase; letter-spacing: 0.5px;">
                문의 내용
              </h2>
              <div style="background: #ffffff; border: 1px solid #e9e9e7; border-radius: 8px; padding: 20px;">
                <p style="margin: 0; font-size: 15px; color: #37352f; line-height: 1.7; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <!-- Quick Actions -->
            <div style="margin-bottom: 32px;">
              <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                <tr>
                  <td style="padding-right: 8px; width: 50%;">
                    <a href="mailto:${email}" style="display: block; background: #2383e2; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 6px; font-size: 14px; font-weight: 500; text-align: center;">
                      ✉️ 이메일 답장
                    </a>
                  </td>
                  <td style="padding-left: 8px; width: 50%;">
                    <a href="tel:${phone}" style="display: block; background: #37352f; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 6px; font-size: 14px; font-weight: 500; text-align: center;">
                      📞 전화 연결
                    </a>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Divider -->
            <hr style="border: none; border-top: 1px solid #e9e9e7; margin: 24px 0;">

            <!-- Footer -->
            <div style="text-align: center;">
              <p style="margin: 0 0 4px 0; font-size: 13px; color: #9b9a97;">
                서전텍 | 공간의 빛을 디자인합니다
              </p>
              <p style="margin: 0; font-size: 12px; color: #c4c4c0;">
                이 메일은 웹사이트 문의 폼을 통해 자동 발송되었습니다
              </p>
            </div>

          </div>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: '이메일 발송에 실패했습니다.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
