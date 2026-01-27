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

    // 이메일 발송
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // 도메인 인증 전까지 사용
      to: 'sj6363@hanmail.net',
      subject: `[서전텍 문의] ${name}님의 문의가 접수되었습니다`,
      html: `
        <div style="font-family: 'Malgun Gothic', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #1a1a1a; color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">새로운 문의가 접수되었습니다</h1>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border: 1px solid #eee;">
            <h2 style="color: #1a1a1a; border-bottom: 2px solid #1a1a1a; padding-bottom: 10px;">
              고객 정보
            </h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 100px;">
                  이름
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold;">
                  이메일
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                  <a href="mailto:${email}" style="color: #1a1a1a;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold;">
                  연락처
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                  <a href="tel:${phone}" style="color: #1a1a1a;">${phone}</a>
                </td>
              </tr>
            </table>
            
            <h3 style="color: #1a1a1a; margin-top: 30px; border-bottom: 2px solid #1a1a1a; padding-bottom: 10px;">
              문의 내용
            </h3>
            <div style="background: white; padding: 20px; border: 1px solid #eee; margin-top: 15px; line-height: 1.8;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="background: #1a1a1a; color: #999; padding: 20px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">이 메일은 서전텍 웹사이트에서 자동 발송되었습니다.</p>
            <p style="margin: 5px 0 0 0;">© ${new Date().getFullYear()} 서전텍. All rights reserved.</p>
          </div>
        </div>
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
